type GreetProps ={
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) => {
    const { messageCount=0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedIn? `Welcom , ${props.name} have ${messageCount} unread messages`
                : `Welcom Guset`}
            </h2>
        </div>
    )
}