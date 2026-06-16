import React, { useEffect, useRef, useState } from "react";
import "./AboutStatus.css";

const stats = [
    { value: 115, suffix: "+", label: "Branch Shop" },
    { value: 85,  suffix: "+", label: "Staffs" },
    { value: 120, suffix: "+", label: "Flavor variants" },
    { value: 90,  suffix: "%", label: "positive Review" },
];

const useCounter = (target, duration = 1800, start) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
};

const StatItem = ({ value, suffix, label, start }) => {
    const count = useCounter(value, 1800, start);
    return (
        <div className="stat-item">
            <span className="stat-number">{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const AboutStats = () => {
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats-section" ref={ref}>
            {stats.map((s) => (
                <StatItem key={s.label} {...s} start={started} />
            ))}
        </section>
    );
};

export default AboutStats;