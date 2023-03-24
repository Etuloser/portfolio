import { gql } from '@apollo/client'


const getMainInfo = `
    linkedin
    id
    fullName
    currentTitle
    images {
      id
      imageUrl {
        width
        url
        height
      }
      createdAt
    }
    resumeDownload {
      url
    }
`

export const getPersonInfo = gql`
query MyQuery {
  mainInfo(where: {id: "clfl8474h046q0bzlgm7xek2h"}) {
    ${getMainInfo}
    personInfo {
      textDatas {
        id
        title
        value {
          raw
        }
      }
    }
  }
}


`

export const getSkill = gql`
query MainInfos {
  mainInfo(where: {id: "clfl8474h046q0bzlgm7xek2h"}) {
    ${getMainInfo}
    skills {
      id
      category
      integerDatas(orderBy: value_DESC) {
        id
        title
        value
      }
    }
  }
}

`

export const getWorkExperience = gql`
query MainInfos {
  mainInfo(where: {id: "clfl8474h046q0bzlgm7xek2h"}) {
    ${getMainInfo}
    workExperiences(orderBy: endTime_DESC) {
      id
      companyName
      jobTitle
      present
      startTime
      endTime
      description
      location
      companyLogo {
        url
      }
      tags {
        id
        title
      }
    }
  }
}


`

export const getEducation = gql`
query MainInfos {
  mainInfo(where: {id: "clfl8474h046q0bzlgm7xek2h"}) {
    ${getMainInfo}
    educations(orderBy: endTime_DESC) {
      id
      major
      present
      schoolName
      startTime
      endTime
    }
  }
}

`

export const getGuessbook = gql`
query MainInfos {
  mainInfo(where: {id: "clfl8474h046q0bzlgm7xek2h"}) {
    ${getMainInfo}
  }
  guessBooks(orderBy: publishedAt_DESC) {
    nickname
    id
    publishedAt
    content
  }
}

`

export const createGuessbook = gql`
mutation CreateGuessBook($nickname: String!, $content: String!){
  createGuessBook(
    data: {content: $content, nickname: $nickname}
  ) {
    id
  }
}

`

export const publishGuessbook = gql`
mutation PublishGuessBook ($id: ID!)  {
  publishGuessBook(where: {id: $id}, to: PUBLISHED) {
    id
  }
}

`

export const getProject = gql`
query MainInfos {
  mainInfo(where: {id: "clfl8474h046q0bzlgm7xek2h"}) {
    ${getMainInfo}
    projects {
      description
      endTime
      id
      role
      projectName
      startTime
      present
      images {
        id
        imageUrl {
          url
          width
          height
        }
      }
    }
  }
}


`