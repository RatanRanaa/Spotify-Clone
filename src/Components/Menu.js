import React, { useEffect } from 'react'
import '../Styles/LeftMenu.css'

const Menu = ({title, menuobject}) => {

    useEffect(()=>{
        const allLi = Array.from(
            document
              .querySelector(".MenuContainer ul")
              .querySelectorAll("li")
          );

        const changeMenuActive = () => {
            allLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active")
        }

        allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, [])

  return (
    <>
      <div className="MenuContainer">
        <p className="title">{title}</p>

        <ul>
            {
                menuobject && menuobject.map((menu)=>(
                    <li key={menu.id}>
                        <a href="/">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
      </div>
    </>
  )
}

export { Menu }
