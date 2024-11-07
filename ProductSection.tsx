import "./local.css"
import { Card } from "./Card"
import { BiNetworkChart } from "react-icons/bi"
import { LuUsers } from "react-icons/lu"
import { PiHandCoinsBold } from "react-icons/pi"

export const ProductSection = () => {

    return(
        <section className="flex justify-center">
            <div className="flex flex-col justify-center items-center gap-10 xl:w-8/12 px-5">
                <div className="xl:w-7/12">
                    <h1 className="">Drive results across every stage of the Insurance Life Cycle</h1>
                </div>
                <div className="flex xl:flex-row flex-col gap-4 w-full justify-center">
                    <Card
                        title="Customer Relationship Management"
                        description={["Develop Strong Agent Relationships","Contact the right agents","Put your data to work"]}
                    ><LuUsers className="xl:w-6 w-7 h-auto text-primary"/>
                    </Card>
                    <Card
                        title="Distribution Management System"
                        description={[
                            "Streamline your processes and drop the busy work",
                            "Simplify communication and elevate your service",
                            "Get organized and reduce mistakes"
                        ]}
                    ><BiNetworkChart className="xl:w-6 w-7 h-auto text-primary"/>
                    </Card>
                    <Card
                        title="Incentives and Commissions Management"
                        description={[
                            "Reduce stress and increase profits",
                            "Monitor your commissions",
                            "Keep agents motivated with trips, marketing credits and incentives"
                        ]}
                    ><PiHandCoinsBold className="xl:w-6 w-7 h-auto text-primary"/>
                    </Card>
                </div>
            </div>
        </section>
    )
}