# Homepage of NCKU NetDB

## How to contribute to this website

1. Clone this project.

```sh
git clone https://github.com/NCKU-CCS/netdb-web.git
```

2. Make your changes and create a pull request.

3. **Remember to change the base repository from curry0622/netdb-web to NCKU-CCS/netdb-web.**

![sample](https://i.imgur.com/wgm4GKY.jpg)

---

## How to add a new member to this website

1. Add your personal image to [members](public/memberPage/members/).The best aspect ratio is `5:4`

2. Find your position in [members.json](src/components/memberPage/members.json).
There are 6 positions in total, which are `consultant`, `postdoc`, `assistant`, `phd`, `master`, and `bachelor`.
Add a new item into your `position` array.

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
        <td>"Che Ping Tsai"</td>
        <td>Your name</td>
    </tr>
    <tr>
        <td rowspan="1">mail</td>
        <td>String</td>
        <td>"kingkazma0112305@gmail.com"</td>
        <td>Your email</td>
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
        <td>Remember to fill in null if you don't have each of them.</td>
    </tr>
    <tr>
        <td rowspan="1">expertise</td>
        <td>Array</td>
        <td>
        [<br>
              "your expertise 1",<br>
              "your expertise 2",<br>
              "your expertise 3",<br>
              ...<br>
        ]<br>
        </td>
        <td>Your expertise</td>
    </tr>
</table>

