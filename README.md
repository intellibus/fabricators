# fabricators

![Fabricators — Create And Modify Files From Templates Or Grids](assets/fabricators.png)

> **THIS PROJECT IS STILL IN THE DESIGN PHASE**
>
> IDEAS & CONTRIBUTIONS ARE WELCOME
>
> An [Open Source Universe](https://github.com/intellibus/approach) Project

---

## Contents

- [fabricators](#fabricators)
  - [Contents](#contents)
  - [Features ✨](#features-)
  - [Install 🛠](#install-)
  - [Usage 🔭](#usage-)
  - [Documentation 🛰](#documentation-)
  - [Contributing 🌎](#contributing-)
  - [License ⚖️](#license-️)

## Features ✨

- Custom Template Syntax `Planned`
- Generate Form from Template File `Planned`
- Fill Template Form using data in a BigParser Grid `Planned`

## Install 🛠

```sh
npm install fabricators
```

## Usage 🔭

Read more about the [Design](https://github.com/intellibus/fabricators/blob/main/DESIGN.md) behind `fabricators` here.

`{name}.txt`

```text
// FABRIC: { name: 'string', birthday: 'date' }
Hello <%= name%>!<%
  if (
    birthday.getDay() === new Date().getDay()
    && birthday.getMonth() === new Date().getMonth()
  ) {
    print('Happy Birthday!')
  }
%>
```

```sh
$ fabricators --template template.txt
name: Anubis
birthday: 07/30/2001

$ cat anubis.txt
Hello Anubis! Happy Birthday!

$ fabricators --template template.txt --gridId yourGridIdWithNameAndBirthdayColumns

$ ls -1
anubis.txt
dan.txt
dom.txt
sarah.txt
ed.txt
...
```

## Documentation 🛰

`fabricators` *is under active development, documentation will be added once an initial release is ready.*

## Contributing 🌎

We would love for you to contribute your ideas, code, & fixes to `fabricators`.

We encourage everyone to read our [Design Document](https://github.com/intellibus/fabricators/blob/main/DESIGN.md) to learn more about the thought process behind fabricators.

Also check out the [rewards](https://github.com/intellibus/approach/blob/main/REWARDS.md) offered for contributing to the [Open Source Universe](https://github.com/intellibus/approach).

## License ⚖️

MIT
