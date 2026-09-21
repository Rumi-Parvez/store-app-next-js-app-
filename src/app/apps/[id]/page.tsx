interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const AppsDetailsPage = async ({params} : PageProps) => {
    const {id} = await params ;

    const res = await fetch(`http://localhost:3001/app_api/${id}`)
    const app = await res.json();

    return (
        <div>
            
        </div>
    );
};

export default AppsDetailsPage;