import React from "react"
import {cn} from "@/lib/utils"
import Image from "next/image"

interface Props {
    className?: string
}

export const ChatList: React.FC<Props> = ({className}) => {
    return (
        <section className={cn(className, "chat-list")}>
            <div className={"chat-list__header"}>
                <h2 className={"chat-list__title"}>Чаты</h2>

                <Image
                    className={"chat-list__add-button button"}
                    src={"/media/icons/add-new-chat.svg"}
                    alt={"Add Chat Icon"}
                    width={56}
                    height={56}
                />
            </div>

            <div className={"chat-list__sort sort"}>
                <h4 className={"sort__type"}>Все</h4>
                <h4 className={"sort__type"}>Приватные</h4>
                <h4 className={"sort__type"}>Общие</h4>
                <h4 className={"sort__type"}>Еще
                    <Image
                        className={"sort__image"}
                        src={"/media/icons/dropdown_outline.svg"}
                        alt={"Additional Chats Icon"}
                        width={24}
                        height={24}
                    />
                </h4>
            </div>

            <div className={"chat-list__input"}>
                <span><Image src={"/media/icons/search-alt.svg"} alt={"Search Icon"} width={30} height={30}/></span>
                <input type={"search"} className={"input"} placeholder={"Поиск людей и каналов..."}/>
            </div>

            <div className={"chat-list__chats"}>
                <div className={"chat-list__chat chat.active status.offline messages.0"}>
                    <div className={"chat__container container"}>
                        <div>
                            <Image src={"/media/icons/avatar-alt.svg"} alt={"Avatar Icon"} width={56} height={56}/>
                        </div>
                        <div>
                            <h3 className={"chat__name"}>Маша Машаева</h3>
                            <p className={"chat__last-message"}>Голосовое сообщение</p>
                        </div>
                    </div>

                    <div className={"chat__container container"}>
                        <p className={"chat__time"}>20:15</p>
                    </div>
                </div>

                <div className={"chat-list__chat chat.inactive status.online messages.2"}>
                    <div className={"chat__container container"}>
                        <div>
                            <Image src={"/media/icons/avatar-black.svg"} alt={"Avatar Icon"} width={56} height={56}/>
                        </div>
                        <div>
                            <h3 className={"chat__name"}>Олег Олегов</h3>
                            <p className={"chat__last-message"}>Как проще всего сделать</p>
                        </div>
                    </div>

                    <div className={"chat__container container"}>
                        <p className={"chat__time"}>16:50</p>
                    </div>
                </div>

                <div className={"chat-list__chat chat.inactive status.offline messages.3"}>
                    <div className={"chat__container container"}>
                        <div>
                            <Image src={"/media/icons/avatar-aa.svg"} alt={"Avatar Icon"} width={56} height={56}/>
                        </div>
                        <div>
                            <h3 className={"chat__name"}>Антон Антонов</h3>
                            <p className={"chat__last-message"}>Что думаешь насчёт этого</p>
                        </div>
                    </div>

                    <div className={"chat__container container"}>
                        <p className={"chat__time"}>15:01</p>
                    </div>
                </div>

                <div className={"chat-list__chat chat.inactive status.online messages.0"}>
                    <div className={"chat__container container"}>
                        <div>
                            <Image src={"/media/icons/avatar-yy.svg"} alt={"Avatar Icon"} width={56} height={56}/>
                        </div>
                        <div>
                            <h3 className={"chat__name"}>Юра Юрьев</h3>
                            <p className={"chat__last-message"}>Что думаешь насчёт сайта Anicat</p>
                        </div>
                    </div>

                    <div className={"chat__container container"}>
                        <p className={"chat__time"}>5 июн</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
