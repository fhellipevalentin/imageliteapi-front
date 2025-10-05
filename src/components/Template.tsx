interface TemplateProps {
    children?: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            <Header />
                <div className="container mx-auto p-4">
                    {props.children}
                </div>
            <Footer />
        </>
    );
}

const Header: React.FC = () => {
    return (
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">ImageLite</h1>
            </div>
        </header>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-indigo-950 text-white p-3 mt-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2023 ImageLite. All rights reserved.</p>
            </div>
        </footer>
    );
}
