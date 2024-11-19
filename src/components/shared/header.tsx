"use client"

import React from "react"
import Image from "next/image"
import {cn} from "@/lib/utils"

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    const openSavedMessages = () => {
        console.log("openSavedMessages")
    }

    const openGroup = () => {
        console.log("openGroup")
    }

    const openSettings = () => {
        console.log("openSettings")
    }

    const openMoon = () => {
        console.log("openMoon")
    }

    const openProfile = () => {
        console.log("openProfile")
    }

    const openDots = () => {
        console.log("openDots")
    }

    const openSearch = () => {
        console.log("openSearch")
    }

    const openPhone = () => {
        console.log("openPhone")
    }

    const openVideo = () => {
        console.log("openVideo")
    }

    const openNotify = () => {
        console.log("openNotify")
    }

    return (
        <header className={cn(className, "header")}>
            <nav className={"header__navigation navigation"}>
                <div className={"navigation__left"}>
                    <button onClick={openSavedMessages} className={"navigation__button button"}>
                        <span className={"visually-hidden"}>Saved Messages Button</span>
                        <Image src={"/media/icons/saved.svg"} alt={"Saved Messages Icon"} width={56} height={56}/>
                    </button>
                    <button onClick={openGroup} className={"navigation__button button"}>
                        <span className={"visually-hidden"}>Group Button</span>
                        <Image src={"/media/icons/group.svg"} alt={"Group Icon"} width={56} height={56}/>
                    </button>
                    <button onClick={openMoon} className={"navigation__button button"}>
                        <span className={"visually-hidden"}>Moon Button</span>
                        <Image src={"/media/icons/moon.svg"} alt={"Moon Icon"} width={56} height={56}/>
                    </button>
                    <button onClick={openSettings} className={"navigation__button button"}>
                        <span className={"visually-hidden"}>Settings Button</span>
                        <Image src={"/media/icons/settings.svg"} alt={"Settings Icon"} width={56} height={56}/>
                    </button>
                </div>

                <div className={"navigation__right"}>
                    <div className={"navigation__container container"}>
                        <div className={"navigation__avatar"}>
                            <button onClick={openProfile} className={"navigation__button button"}>
                                <span className={"visually-hidden"}>Profile Button</span>
                                <Image src={"/media/icons/avatar.svg"} alt={"Avatar Icon"} width={56} height={56}/>
                            </button>
                        </div>

                        <div className={"navigation__info info"}>
                            <span className={"visually-hidden"}>User Info</span>

                            <h4 onClick={openProfile} className={"info__name"}>Маша Машева</h4>
                            <p className={"info__status"}>был(а) в сети 15 минут назад</p>
                        </div>
                    </div>

                    <div className={"navigation__container container"}>
                        <div className={"navigation__icons icons"}>
                            <button onClick={openPhone} className={"navigation__button button"}>
                                <span className={"visually-hidden"}>Phone Button</span>
                                <Image src={"/media/icons/phone.svg"} alt={"Phone Icon"} width={56} height={56}/>
                            </button>
                            <button onClick={openVideo} className={"navigation__button button"}>
                                <span className={"visually-hidden"}>Video Button</span>
                                <Image src={"/media/icons/video.svg"} alt={"Video Icon"} width={56} height={56}/>
                            </button>
                            <button onClick={openSearch} className={"navigation__button button"}>
                                <span className={"visually-hidden"}>Search Button</span>
                                <Image src={"/media/icons/search.svg"} alt={"Search Icon"} width={56} height={56}/>
                            </button>
                            <button onClick={openDots} className={"navigation__button button"}>
                                <span className={"visually-hidden"}>Dots Button</span>
                                <Image src={"/media/icons/dots.svg"} alt={"Dots Icon"} width={56} height={56}/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <article className={"header__notify notify"}>
                <button onClick={openNotify} className={"notify__button button"}>
                    <span className={"visually-hidden"}>Notify Button</span>

                    <Image
                        className={"notify__icon"}
                        src={"/media/icons/notify.svg"}
                        alt={"Notify Icon"}
                        width={56}
                        height={56}
                    />
                </button>
            </article>
        </header>
    )
}
