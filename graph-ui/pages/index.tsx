import Image from "next/image";
import { Inter } from "next/font/google";
import 'reactflow/dist/style.css';

const inter = Inter({ subsets: ["latin"] });

const proOptions = { hideAttribution: true };



export default function Home() {
return (
<div>
    < div style={{ height: '800px' , width: '800px' } }>
        <NestedFlow />
</div>
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

const initialNodes: Node[] = [





{
id: '1',
data: { label: 'Building and Deploying' },
position: { x: 50, y: 100 },
className: 'light',
style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 120 },
},


{
id: '1-1',
data: { label: 'windows' },
position: { x: 20, y: 50 },
parentId: '1',
},


{
id: '1-2',
data: { label: 'macos' },
position: { x: 20, y: 100 },
parentId: '1',
},





{
id: '2',
data: { label: 'Learning Rust' },
position: { x: 300, y: 100 },
className: 'light',
style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 240 },
},


{
id: '2-1',
data: { label: 'starter' },
position: { x: 20, y: 50 },
parentId: '2',
},


{
id: '2-2',
data: { label: 'tests' },
position: { x: 20, y: 100 },
parentId: '2',
},


{
id: '2-3',
data: { label: 'next' },
position: { x: 20, y: 150 },
parentId: '2',
},


{
id: '2-4',
data: { label: 'benchmarks' },
position: { x: 20, y: 200 },
parentId: '2',
},


];

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
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

const onConnect = useCallback((connection: Edge | Connection) => {
setEdges((eds) => addEdge(connection, eds));
}, []);

return (
<ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}
    className="react-flow-subflows-example" fitView proOptions={proOptions}>
    <MiniMap />
    <Controls />
    <Background />
</ReactFlow>
);
};