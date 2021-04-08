const sections = [
    {
        "title": "Getting started",
        "reset_lesson_position": false,
        "lessons": [
            {"name": "Welcome"},
            {"name": "Installation"}
        ]
    },

    {
        "title": "Basic operator",
        "reset_lesson_position": false,
        "lessons": [
            {"name": "Addition / Subtraction"},
            {"name": "Multiplication / Division"}
        ]
    },

    {
        "title": "Advanced topics",
        "reset_lesson_position": true,
        "lessons": [
            {"name": "Mutability"},
            {"name": "Immutability"}
        ]
    }
];

const lessonPos = (section, idxSection, idxLesson) => {
    if(!section['reset_lesson_position'] && idxSection !== 1){
        return (idxLesson+idxSection) + 1;
    }

    return idxLesson + 1;
}

const flattedSections = sections.map((section, idxSection) => {
    return {
        ...section,
        ...{position: (idxSection+1)},
        ...{lessons: section.lessons.map((lesson, idxLesson) => {
                return {...lesson, ...{position: lessonPos(section, (idxSection+1), idxLesson) } } }  )
        }
    }
});

console.log(JSON.stringify(flattedSections, null, 2))