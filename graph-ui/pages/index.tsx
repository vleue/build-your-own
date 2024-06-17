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
import content from "../generated/nodes";

const initialEdges: Edge[] = [
    // { id: 'e1-2', source: '1', target: '2', animated: true },
    // { id: 'e1-3', source: '1', target: '3' },
    // { id: 'e2a-4a', source: '2a', target: '4a' },
    // { id: 'e3-4b', source: '3', target: '4b' },
    // { id: 'e4a-4b1', source: '4a', target: '4b1' },
    // { id: 'e4a-4b2', source: '4a', target: '4b2' },
    // { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
];

const NestedFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(content);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
