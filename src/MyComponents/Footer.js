import React from 'react'


export const Footer = () => { 
    let FooterStyle = {
        position: "relative",
        bottom: "1px",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-3"style={FooterStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
