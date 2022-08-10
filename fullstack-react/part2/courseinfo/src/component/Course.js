import React from "react";

function Course({ course }) {
    return (
        <>
            {course && course.map(v => 
            <section key={v.id}>
                <h1>{v.name}</h1>
                {v.parts.map((v1) => (
                    <p key={v1.id}>
                        {v1.name} - {v1.exercises}
                    </p>
                ))}
                {v.parts.reduce((pre, cur, index, arr) => {
                    if (index == arr.length - 1) {
                        pre += cur.exercises;
                        return <strong>total exercises is {pre}</strong>;
                    }
                    pre += cur.exercises;
                    return pre;
                }, 0)}
            </section>
            )}
        </>
    );
}

export default Course;
