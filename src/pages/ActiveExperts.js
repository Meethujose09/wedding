import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const experts = [
    {
        name: 'Shenal',
        expertise: 'Data Science',
        completedProjects: 15,
        projects: [
            { name: 'Susnet', progress: 75 },
            { name: 'Data Analysis Pipeline', progress: 50 },
        ],
        rating: 4,
    },
    {
        name: 'Jibin',
        expertise: 'Machine Learning',
        completedProjects: 10,
        projects: [
            { name: 'Selwell', progress: 100 },
            { name: 'Predictive Modeling', progress: 60 },
        ],
        rating: 5,
    },
];

const ActiveExperts = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Active Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experts.map((expert, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{expert.name}</h3>
                        <p className="text-sm text-gray-500 mb-2"><strong>Expertise:</strong> {expert.expertise}</p>
                        <p className="text-sm text-gray-500 mb-4"><strong>Completed Projects:</strong> {expert.completedProjects}</p>
                        
                        <div className="space-y-3">
                            <p className="font-semibold text-gray-700">Current Projects:</p>
                            {expert.projects.map((project, i) => (
                                <div key={i} className="mb-2">
                                    <p className="text-gray-600 text-sm">{project.name}</p>
                                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="absolute top-0 left-0 h-2 rounded-full bg-green-500"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">{project.progress}% complete</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-4 flex items-center">
                            <strong className="text-gray-700">Rating:</strong>
                            <span className="ml-2 flex">
                                {[...Array(5)].map((_, i) => (
                                    <AiFillStar key={i} size={16} color={i < expert.rating ? '#FFD700' : '#d3d3d3'} />
                                ))}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveExperts;
