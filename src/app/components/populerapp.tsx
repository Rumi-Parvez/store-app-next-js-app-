import AppCard from "./appCard";


const Populerapp = async () => {
    const res = await fetch('http://localhost:3001/app_api')
    const data = await res.json();
    
    const appDataProps = [...data]

    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center py-10 ">
                <h1 className="font-bold text-4xl ">Trending Apps</h1>
                <p className="mt-3 ">Explore All Trending Apps on the Market developed by us</p>
            </div>



            <div className="grid grid-cols-4 gap-3">
                {
                    appDataProps.filter(app => app.ratings >= 4.6).map(app => <AppCard key={app.id} app={app}></AppCard>)
                }

            </div>
        </div>
    );
};

export default Populerapp;