import "./local.css"
import { CardNoIcons } from "./CardNoIcons"

export const ProductSectionNoIcons = () => {

    return(
        <section className="flex justify-center py-20">
            <div className="flex flex-col justify-center items-center gap-10 xl:w-8/12 px-5">
                <div className="xl:w-6/12">
                    <h1 className="px-5">Drive results across every stage of the Insurance Life Cycle</h1>
                </div>
                <div className="flex xl:flex-row flex-col gap-4 w-full justify-center">
                    <CardNoIcons
                        title="Customer Relationship Management"
                        description={["Develop Strong Agent Relationships","Contact the right agents","Put your data to work"]}
                    ><div className="xl:w-9 w-16 xl:h-9 h-16 bg-primary rounded-full"></div>
                    </CardNoIcons>
                    <CardNoIcons
                        title="Distribution Management System"
                        description={[
                            "Streamline your processes and drop the busy work",
                            "Simplify communication and elevate your service",
                            "Get organized and reduce mistakes"
                        ]}
                    ><div className="xl:w-9 w-16 xl:h-9 h-16 bg-primary rounded-full"></div>
                    </CardNoIcons>
                    <CardNoIcons
                        title="Incentives and Commissions Management"
                        description={[
                            "Reduce stress and increase profits",
                            "Monitor your commissions",
                            "Keep agents motivated with trips, marketing credits and incentives"
                        ]}
                    ><div className="xl:w-9 w-16 xl:h-9 h-16 bg-primary rounded-full"></div>
                    </CardNoIcons>
                </div>
            </div>
        </section>
    )
}