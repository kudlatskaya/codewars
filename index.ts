// export function simpleMultiplication(num: number): number{
//
//     return (num % 2) ? num * 9 : num * 8;
// }
//
// export function findNeedle(haystack: any[]):string {
//     let index = haystack.findIndex((item) => item == 'needle');
//     return  `found the needle at position ${index}`;
// }
//
// export function sumCubes(n: number): number {
//     // your code here
//     let sum: number = 0;
//
//     for(let i = 1; i <= n; i++) {
//         sum += i**3;
//     }
//
//     return sum
// }

// export function basicOp(operation: string, value1: number, value2: number): number {
//     // Good luck!
//
//     let result = (operation === '+')
//         ? value1 + value2
//         : (operation === '-')
//             ? value1 - value2
//             : (operation === '*')
//                 ? value1 * value2
//                 : (operation === '/')
//                     ? value1 / value2
//                     : 0;
//
//     return result;
// }

type CarsType = {
    manufacturer?: string,
    model?: string,
}

type ArrayCarsType = {
    cars: Array<CarsType>
}
const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

//********    4   **********//
type DoneType = true | false
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

type MarkType = {
    subject: string
    mark: MarkFilterType
    done: DoneType
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType,
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>,
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void,
    mark: MarkFilterType,
    group: GroupFilterType,
}

let students: Array<StudentType> = [
    {
        id: 1, name: 'Masha', group: 10, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 3, done: false},
            {subject: 'fiz', mark: 8, done: true},
        ]
    },
    {
        id: 2, name: 'Misha', group: 11, marks: [
            {subject: 'math', mark: 10, done: true},
            {subject: 'rus', mark: 4, done: true},
            {subject: 'fiz', mark: 8, done: true},
        ]
    },
    {
        id: 3, name: 'Dasha', group: 11, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 3, done: false},
            {subject: 'fiz', mark: 10, done: true},
        ]
    },
    {
        id: 4, name: 'Pasha', group: 12, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 5, done: true},
            {subject: 'fiz', mark: 2, done: false},
        ]
    },
    {
        id: 5, name: 'Sasha', group: 12, marks: [
            {subject: 'math', mark: 5, done: true},
            {subject: 'rus', mark: 5, done: true},
            {subject: 'fiz', mark: 5, done: true},
        ]
    },
]

const studentsFilter = (group: number) => {
    let _students = students.filter(item => item.group === group);

    return _students;
}

const marksFilter = (mark: number) => {
    let _students = students.filter(item => {
        for (let i = 0; i < item.marks.length; i++) {
            if (item.marks[i].mark === mark) return true;
        }
        return false;
    })


    return _students;
}

const deleteStudent = (id: number) => {
    let _students = students.filter(item => item.id !== id);

    students = [..._students];
}

const groupStudents: GroupType = {
    students: students,
    studentsFilter: studentsFilter,
    marksFilter: marksFilter,
    deleteStudent: deleteStudent,
    mark: 5,
    group: 11,
}
console.log('studentsFilter');
console.log(groupStudents.studentsFilter(groupStudents.group));
console.log('marksFilter');
console.log(groupStudents.marksFilter(groupStudents.mark));
console.log('delete student');
groupStudents.deleteStudent(3);
console.log(students);

//2
import ReactDOM from 'react-dom'

export const YoutubeVideo = (props) => {
    return <div>
            <VideoHeader title=props.title/>
        <VideoContent />
        <VideoStatistics />
        </div>
}
export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}
export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}
export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}

ReactDOM.render(<div><YoutubeVideo title='title' video='video' likes='likes'></div>,
document.getElementById('root')
);

//3
//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода


type UserPropsType = {
    name: string
    description: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>
        <h1>Имя: {props.name}</h1>
    <div>Описание: {props.description}</div>
    </div>
}

//

//4
type PropsType = {
    city: string        // 'minsk'
    country: string     // 'belarus'
    coords?: string     // '53.917501,27.604851'
}

export const Wrapper1 = () => {
    return <PropsComponent1 city='minsk' country='belarus' />
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

//5
// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки


type PagePropsType = {
    age: number
    name: string
    avatarUrl: string
}
const Page: React.FC<PagePropsType> = (props) => {
    return <User a={props.age} n={props.name} />
}
type UserPropsType = {
    a: number
    n: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}

//6
// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)

type NewsType = {
    title: string
    author: string
}
type ArticleType = {
    title: string
    date: string
    text: string
}
type PagePropsType = {
    news: NewsType[]
    mainArticle: ArticleType
}
export const Page: React.FC<PagePropsType> = (props) => {
    return <div>
        <article>
            <h1>Название: {props.mainArticle.title}</h1>
    <div>{props.mainArticle.date}</div>
    <div>{props.mainArticle.text}</div>
    </article>
    <aside>Articles:
    <ul>
        {props.news.map(n => <li>{n.title}, {n.author}</li>)}
                </ul>
                </aside>
                </div>
        }

        //7
    /*Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?

        Ответ дайте через пробел, например: props.x wallets*/
    type UserWalletType = {
        title: string
        amount: number
    }
    type UserWalletPropsType = {
        wallet: UserWalletType
    }

    export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
        return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
    }

    export const UserMoney = () => {
        const wallets = [
            {title: 'bitcoin', amount: 1},
            {title: '$', amount: 100}
        ]

        return <div>
            <UserWallet wallet={wallets[0]} />
        <UserWallet wallet={wallets[1]} />
        </div>
    }


    //8
    // Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
    //
    //     Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}
    //8 вопрос не верно
    //videoName={props.title} videoContent={props.link} videoDescription={props.description}

    import ReactDOM from 'react-dom'

    export const VideoHeader = (props: {videoName: string}) => {
        return <div>
        😀 {props.videoName}
        </div>
    }
    export const VideoContent = (props: {videoContent: string}) => {
        return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
            </div>
    }
    export const VideoDescription = (props: {videoDescription: string}) => {
        return <div>
        📑 {props.videoDescription}
        </div>
    }

    export const YoutubeVideo = (props: any) => {
        return <div>
                <VideoHeader videoName={props.video.title} /> //props.title
            <VideoContent videoContent={props.link} /> //props.link
            <VideoDescription videoDescription={props.description} /> //props.description
            </div>
    }

    export const App = () => {
        const video = {
            title: 'Samurai way',
            link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
            description: 'Best free react-course'
        }

        return <YoutubeVideo video={video} />
    }

    ReactDOM.render(<App />,
        document.getElementById('root')
    );

    //9
    // Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
    import ReactDOM from 'react-dom'

    const CrazyButton = (props: any) => {

        const style = {
            color: props.XXX, //fontColor
            backgroundColor: props.YYY //bgColor
        }

        return <button style={style}>
            {props.ZZZ} //title
            </button>
    }

    export const App = () => {
        return <div>
            <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
        </div>
    }

    ReactDOM.render(<App/>,
        document.getElementById('root')
    )

    //10
//Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
    import ReactDOM from 'react-dom'

    const Son = (props: any) => {
        return <div>
            I am son. My name is {props.name}
        </div>
    }


    const Father = (props: any) => {
        return <div>
            I am father. My name is {props.name}
        <Son name={props.sonName} />
        </div>
    }

    const Granny = (props: any) => {
        return <div>
            I am granny. My name is {props.name}
        <Father name={props.fatherName} sonName={props.sonName} />
        </div>
    }

    export const App = () => {
        return <div>
            <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/> //name fatherName sonName
        </div>
    }

    ReactDOM.render(<App/>,
        document.getElementById('root')
    )

