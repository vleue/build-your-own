import Image from "next/image";
import { Inter } from "next/font/google";
import 'reactflow/dist/style.css';

const inter = Inter({ subsets: ["latin"] });

const proOptions = { hideAttribution: true };



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
// import { content, dependencies } from "../generated/nodes";

import generated from '../generated/nodes';

const NestedFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(generated.content);
    const [edges, setEdges, onEdgesChange] = useEdgesState(generated.dependencies);

    const onConnect = useCallback((connection: Edge | Connection) => {
        setEdges((eds) => addEdge(connection, eds));
    }, []);

    return (
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}
            className="react-flow-subflows-example" fitView proOptions={proOptions}>
            <MiniMap />
            <Controls />
        </ReactFlow>
    );
};
