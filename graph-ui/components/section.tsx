import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function Section({ data }: any) {
    let height = (data.children + 1) * 50;
    let height_class = `h-[${height}px]`;
    let section_class = `w-60 ${height_class} px-4 py-1 shadow-lg rounded-lg bg-slate-800 border-4 border-stone-700`;
    return (
        <div className={section_class}>
            <div className="flex">
                <div className="ml-2">
                    <div className="text-md font-bold text-gray-300">{data.label}</div>
                </div>
            </div>
        </div>
    );
}

export default memo(Section);
