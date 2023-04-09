import userRoutes from "./user.js"



const initRoute = (app) => {
    app.use(userRoutes)
};

export default initRoute;