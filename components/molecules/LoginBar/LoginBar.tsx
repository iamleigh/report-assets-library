import React from "react"
import IconButton from "@atom/IconButton/IconButton"

interface LoginBarProps {
    user: string
}

const LoginBar: React.FC<LoginBarProps> = ({ user }) => {
    return (
        <div className="sticky flex gap-4 justify-between mb-4 px-2 py-2 bg-gray-600 text-white">
            <div className="flex gap-2 items-center">
                <IconButton label="Open Menu" icon="menu" />
                <p>Howdy, { user }!</p>
            </div>

            <IconButton label="Logout" icon="logout" />
        </div>
    )
}

export default LoginBar