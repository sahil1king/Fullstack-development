dotenv.config()
const app=express()
const PORT=process.env.PORT
app.use(cors({origin:"http://localhost:3000",credentials:true}))

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`server at ${PORT}`)
})