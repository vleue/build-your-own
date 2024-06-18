import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function Section({ data }: any) {
    let height = (data.children + 1) * 60;
    let height_class = `h-[${height}px]`;
    let width = (data.width * 200) + 40;
    let width_class = `w-[${width}px]`;
    let section_class = `${width_class} ${height_class} px-4 py-1 shadow-lg rounded-lg bg-slate-800 border-4 border-stone-700`;
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
