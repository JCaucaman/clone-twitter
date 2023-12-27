import { UserImg } from "./UserImg";
import { Button } from "./Button";
import { TextArea } from "./TextArea";

export function FormPost() {
    return(
        <div className="flex w-full bg-purple-800  max-h-256 pl-4 pr-4 pt-3">
            <UserImg img="/imagen.jpg" />
            <form className="pb-4 w-full">
                <TextArea />
                <div className="flex justify-between">
                    <div>
                        <input value="🏞️" type="button"/>
                    </div>
                    <div>
                        <Button text="Post" />
                    </div>
                </div>
            </form>
        </div>
    )
}