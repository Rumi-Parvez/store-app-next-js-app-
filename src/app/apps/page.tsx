import AppCard from "../components/appCard";

const AppPage = async () => {
    const res = await fetch('http://localhost:3001/app_api')
    const data = await res.json();
    
    const appDataProps = [...data]

    return (
        <div>
            <div className="mt-5 grid grid-cols-5 gap-3">
                {
                    appDataProps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }

            </div>
            
        </div>
    );
};

export default AppPage;