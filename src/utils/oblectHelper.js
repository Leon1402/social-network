export const usersFollowed = (users, userId, followed) => (
    users.map((u) => {
        if (u.id === userId)
            return { ...u, followed };
        return u;
    })
)