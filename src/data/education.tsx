export interface EducationData {
    id: number;
    title: string;
    name: string;
    desc: string;
}

const educationData: EducationData[] = [
    {
        id: 1,
        title: "2006 - 2012",
        name: "SDN Gading VII",
        desc: "In this elementary school, I was educated to be an active student and put forward communication with friends and teachers, in this elementary school it is also my teaching to dare to ask questions.",
    },
    {
        id: 2,
        title: "2012 - 2015",
        name: "SMP PGRI 1",
        desc: "This Junior High School gives me an interesting impression about the fun of learning and exploring something, in this Junior High School I am also very interested in Technology and Information.",
    },
    {
        id: 3,
        title: "2015 - 2018",
        name: "SMK RAJASA",
        desc: "I go deeper into the learning process and always focus on 1 area. I am also taught how to run a project well. In this Vocational High School I am very enthusiastic because basically it focuses on 1 field.",
    },
    {
        id: 4,
        title: "2018 - 2022",
        name: "University 17 Agustus Surabaya",
        desc: "In this level I was taught how to manage and manage projects very well, I was also taught how to communicate more quickly and accurately with other people, especially people who were never known.",
    },
];

export default educationData;
