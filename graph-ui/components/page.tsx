import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function Page({ data }: any) {
    return (
        <a href={data.path}>
            <div className="w-48 px-4 py-1 shadow-lg rounded-lg bg-gray-600 border-2 border-stone-600">
                <div className="flex">
                    <div className="ml-2">
                        <div className="text-sm text-gray-100">{data.label}</div>
                    </div>
                </div>
                <Handle type="target" position={Position.Top} className="w-16 bg-transparent border-0 pointer-events-auto cursor-auto" />
                <Handle type="source" position={Position.Bottom} className="w-16 bg-transparent border-0 pointer-events-auto cursor-auto" id="bottom" />
                <Handle type="source" position={Position.Left} className="w-16 bg-transparent border-0 pointer-events-auto cursor-auto" id="left" />
                <Handle type="source" position={Position.Right} className="w-16 bg-transparent border-0 pointer-events-auto cursor-auto" id="right" />
            </div>
        </a>
    );
}

export default memo(Page);
