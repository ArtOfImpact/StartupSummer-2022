import './Repositories.css'

let Repositories = (props) => {
    return (
        <div className="content__repositories repositories">
            <div className="repositories__title">
                <span> Repositories ({props.User.public_repos})</span>
            </div>
            {props.Repos.map((el) => <div key={el.id} className="repositories__box box">
                <div className="box__title">
                    <span className='title'><a target="_blank" href={el.html_url}>{el.name}</a></span>
                </div>
                <div className="box__text">
                    <span>{el.description}</span>
                </div>
            </div>)}
        </div>
    )
}

export default Repositories