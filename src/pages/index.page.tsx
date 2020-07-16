/// <reference path="../jsx.d.ts" />
import { React, page } from "https://raw.githubusercontent.com/apiel/adka/master/mod.ts";

function Main() {
    return (
        <div>
            <h1>Main page</h1>
            <p>This is an example</p>
        </div>
    );
}

export default page(Main);
