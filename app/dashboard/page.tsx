import React from "react";
import ProjectContent from "@/app/dashboard/components/project-content";

const Dashboard = async () => {
    return (
        <div className={'bg-[#fafafa] h-full min-h-[90vh]'}>
            <ProjectContent/>
        </div>
    );
}

export default Dashboard