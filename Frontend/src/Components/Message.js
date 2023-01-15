import '../Stylesheets/Message.css'

function Message(props) {

    return (
        <div className='rounded-rectangle'>
            <div className='word'>
                {props.word}
            </div>
            <div className='time'>
                {props.time}
            </div>
        </div>
    )
}

export default Message