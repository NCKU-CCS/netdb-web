# Homepage of NCKU NetDB

## How to contribute to this repository

1. Clone this project.

    ```sh
    git clone https://github.com/NCKU-CCS/netdb-web.git
    ```

2. Make your changes and create a pull request.

3. **Remember to change the base repository from `curry0622/netdb-web` to `NCKU-CCS/netdb-web`.**

    ![sample](https://i.imgur.com/wgm4GKY.jpg)

<br>

## How to add a new member to this website

1. Add your personal image to [members' image folder](public/memberPage/members/).The best image aspect ratio is `5:4`.

2. Find your position in [members.json](src/components/memberPage/members.json).
There are 6 positions in total, which are `consultant`, `postdoc`, `assistant`, `phd`, `master`, and `bachelor`. Each `position` is an array containing all members with the same position. Add a new item as below into your `position` array.

    <table>
        <thead>
            <th>Key</th>
            <th>Type</th>
            <th>Value</th>
            <th>Description</th>
        </thead>
        <tr>
            <td rowspan="1">name</td>
            <td>String</td>
            <td>"Shiao Ming Wang"</td>
            <td>Your name.</td>
        </tr>
        <tr>
            <td rowspan="1">mail</td>
            <td>String</td>
            <td>"kingkazma0112305@gmail.com"</td>
            <td>Your email.</td>
        </tr>
        <tr>
            <td rowspan="1">link</td>
            <td>Object</td>
            <td>
            {<br>
                  github: "your github link",<br>
                  linkedin: "your linkedin link",<br>
                  homepage: "Your fb, ig, ..."<br>
            }<br>
            </td>
            <td>Your links. <b>Remember to fill in null if you don't have a specific link. That is, if you don't have a github account, please fill in `github: null`.</b></td>
        </tr>
        <tr>
            <td rowspan="1">expertise</td>
            <td>Array</td>
            <td>
            [<br>
                  "Front-end Development",<br>
                  "Data Science",<br>
                  ...<br>
            ]<br>
            </td>
            <td>Your expertise.</td>
        </tr>
    </table>

3. Create a pull request and wait for [code owners](CODEOWNERS) to review.

<br>

## How to add a new project

1. Add your project's image to [projects' images folder](public/workPage/pics/).

2. Add your project's partners' images to [partners' images folder](public/workPage/partners/).

3. Add your project's info as below to [projects.json](src/components/workPage/projects.json).

    <table>
        <thead>
            <th>Key</th>
            <th>Type</th>
            <th>Value</th>
            <th>Description</th>
        </thead>
        <tr>
            <td rowspan="1">name</td>
            <td>String</td>
            <td>"Energy Trading Platform"</td>
            <td>Your project's name.</td>
        </tr>
        <tr>
            <td rowspan="1">year</td>
            <td>Number</td>
            <td>2021</td>
            <td>Your project's created year.</td>
        </tr>
        <tr>
            <td rowspan="1">type</td>
            <td>String</td>
            <td>"DLT"</td>
            <td>Your project's category, there are only 5 types available, which are `AIOT`, `Cloud Computing`, `Data Science`, `Interactive Data Visualization`.</td>
        </tr>
        <tr>
            <td rowspan="1">slogan</td>
            <td>String</td>
            <td>"Promote electricity liberalization"<br>
            </td>
            <td>Your project's slogan.</td>
        </tr>
        <tr>
            <td rowspan="1">introduction</td>
            <td>String</td>
            <td>"The main goal of the..."<br>
            </td>
            <td>Your project's introduction.</td>
        </tr>
        <tr>
            <td rowspan="1">link</td>
            <td>String</td>
            <td>"https://kinmen.udc-service.io"<br>
            </td>
            <td>Your project's homepage. <b>Remember to fill in null if your project doesn't have a homepage.</b></td>
        </tr>
        <tr>
            <td rowspan="1">image</td>
            <td>String</td>
            <td>"energy-platform.png"<br>
            </td>
            <td>Your project's image name you added in step 1.</td>
        </tr>
        <tr>
            <td rowspan="1">partners</td>
            <td>Array</td>
            <td>
            [<br>
                  "TEPCO.svg",<br>
                  "TokyoGas.svg",<br>
                  ...<br>
            ]<br>
            </td>
            <td>Your project's partners' images name you added in step 2. <b>Remember to leave an empty array there if your project doesn't have any partners.</b></td>
        </tr>
    </table>

4. Create a pull request and wait for [code owners](CODEOWNERS) to review.
