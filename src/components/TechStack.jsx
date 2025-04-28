import { ReactOriginal, JavascriptOriginal, MongodbOriginal, NextjsOriginal, NodejsOriginal, PostgresqlOriginal, ExpressOriginal, SqlalchemyOriginal, PythonOriginal, DjangoPlain, ReduxOriginal, MaterialuiOriginal } from 'devicons-react';
import useTheme from '../hooks/useTheme';

const TechStack = () => {
    const { darkMode } = useTheme();

    return (
        <section className={` mt-[-50px] max-w-3xl mx-auto px-5 ${darkMode ? 'bg-[#0a192f] text-white' : 'bg-white text-black'} py-16`}>
            <div className="flex flex-col justify-center">
             
                <div className="flex flex-wrap items-center justify-center gap-20  md:justify-around">
                    <div className="icon-container">
                        <ReactOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <JavascriptOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <MongodbOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <NextjsOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <NodejsOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <PostgresqlOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <ExpressOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <SqlalchemyOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <PythonOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <DjangoPlain size="50" />
                    </div>
                    <div className="icon-container">
                        <ReduxOriginal size="50" />
                    </div>
                    <div className="icon-container">
                        <MaterialuiOriginal size="50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
