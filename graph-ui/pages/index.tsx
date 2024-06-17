import { Inter } from "next/font/google";
import 'reactflow/dist/style.css';

const inter = Inter({ subsets: ["latin"] });

const proOptions = { hideAttribution: true };

import { useState, useEffect } from 'react';

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    return {
        width: 0,
        height: 0
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


export default function Home() {
    return (
        < div style={{ height: '100vh', width: '100vw' }}>
            <NestedFlow />
        </div>
    );
}


import { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    useNodesState,
    useEdgesState,
    MiniMap,
    Controls,
    Node,
    Edge,
    Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';

import generated from '../generated/nodes';

import Page from '../components/page';
import Section from '../components/section';

const nodeTypes = {
    page: Page,
    section: Section,
};

const NestedFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(generated.content);
    const [edges, setEdges, onEdgesChange] = useEdgesState(generated.dependencies);

    const onConnect = useCallback((connection: Edge | Connection) => {
        setEdges((eds) => addEdge(connection, eds));
    }, []);

    const size = useWindowDimensions();

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            className="react-flow-subflows-example"
            defaultViewport={{ x: size.width / 3, y: size.height / 4, zoom: 1.5 }}
            proOptions={proOptions}
            edgesUpdatable={false}
            edgesFocusable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            nodeTypes={nodeTypes}
            translateExtent={[[-500, -500], [1500, 1000]]}
        >
            <MiniMap />
            <Controls />
        </ReactFlow>
    );
};
