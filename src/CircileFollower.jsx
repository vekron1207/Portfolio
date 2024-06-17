// src/CircleFollower.jsx
import React, { useState, useEffect } from 'react';
import './CircleFollower.css';

const CircleFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="circle" style={{ top: position.y, left: position.x }}></div>;
};

export default CircleFollower;
