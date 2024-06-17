import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function Page({ data }: any) {
    return (
        <a href={data.path}>
            <div className="w-48 px-4 py-1 shadow-lg rounded-lg bg-gray-400 border-2 border-stone-400">
                <div className="flex">
                    <div className="ml-2">
                        <div className="text-sm text-black">{data.label}</div>
                    </div>
                </div>
                <Handle type="target" position={Position.Top} className="w-16 bg-transparent border-0 pointer-events-auto cursor-auto" />
                <Handle type="source" position={Position.Bottom} className="w-16 bg-transparent border-0 pointer-events-auto cursor-auto" />
            </div>
        </a>
    );
}

export default memo(Page);
