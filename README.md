# 2022-SolutionChallenge-Dasoni

2022 Google Solution Challenge를 위한 프로젝트다.

## Summary

미혼모/부를 위한 감정 기록 다이어리 서비스

- 다이어리 기록을 통해 감정 관리를 할 수 있고, 텍스트 감정 분석을 통해 감정 상태를 진단할 수 있다.

- 또한 사용자 설정에 따라 원하는 감정 일기를 피드에 공유함으로서 공감과 위로를 위한 커뮤니티를 형성할 수 있다.

- 카테고리별로 관련 지원 사업 링크 연계 서비스를 제공하고 지도를 통해 미혼모 센터 찾기 기능을 지원한다.

<br/>

## 현황 조사

<img width="1583" alt="스크린샷 2022-05-23 오전 11 35 18" src="https://user-images.githubusercontent.com/54584063/169732728-efd0d19d-b8f4-4af3-b34a-a51d92147193.png"/>

<br/>

## 컨셉 키워드

<img width="1583" alt="스크린샷 2022-05-23 오전 11 35 14" src="https://user-images.githubusercontent.com/54584063/169732740-28f5be53-c012-49f4-a19a-28f82a5dd542.png"/>

<br/>

## IA

<img width="1583" alt="스크린샷 2022-05-23 오전 11 34 58" src="https://user-images.githubusercontent.com/54584063/169732748-eacbef78-644b-4cdb-b7e5-2249990408f6.png"/>

<br/>

## Architecture

<img width="1583" alt="스크린샷 2022-05-23 오전 11 37 23" src="https://user-images.githubusercontent.com/54584063/169732920-2e228ca5-3f3d-43ee-b986-096a02f44726.png"/>

<br/>

## Dasoni Client

### Getting Started

**Prerequisite**

- node : `v16.13`

**Execute**

```bash
# 0. front 폴더에 들어가기
$ cd front

# 1. 설치하기
$ npm install

# 2. 실행하기
$ npm run dev
#또는
$ yarn start
```

## Feature

1. **구글 소셜 로그인**

   Google Social Login을 통해서 사용자 계정 생성 및 로그인

   <img width="330" alt="다소니-로그인" src="https://user-images.githubusercontent.com/54584063/169696768-4b842c4a-6794-47f9-9fbb-1f9f560d7c22.gif"/>

   <br/>

2. **감정 일기**

- 날짜에 따른 감정 위로 문구

  감정적 위로를 위한 명언을 보여준다.

- Weekly 감정 분석 및 일주일 단위로 보기

  주 단위로 사용자가 작성한 일기의 텍스트 감정을 분석한다. 이때 나온 결과를 직관적으로 보여준다. 상세페이지를 통해 그 주에 작성한 일기를 확인할 수 있다.

  <img width="330" alt="다소니-weeklymood" src="https://user-images.githubusercontent.com/54584063/169696855-7f48701d-a46b-428d-9a88-8456c5489622.gif"/>

- 내 감정 일기 확인

  색상과 경고아이콘으로 감정적 위험 상황을 직관적으로 인지시킬 수 있다. 알림을 원하지 않는 유저를 위해 notification 토글 버튼을 통해 알림 표시를 on/off 할 수 있다.

  <img width="330" alt="다소니-notification-toggle" src="https://user-images.githubusercontent.com/54584063/169696866-3c421534-f1c1-41ba-90e0-45c503e9206f.gif"/>

- 다이어리 작성

  사용자는 날짜와 함께 감정을 선택할 수 있다. 아래 체크박스를 통해 피드에 업로드 할 수 있다.

  <video width="330" src="https://user-images.githubusercontent.com/54584063/169795799-19288ff8-554a-42a2-941c-e6df720521fc.MOV" controls autoplay></video>

   <br/>

**3. 감정 통계**

사용자가 입력한 감정 상태와 텍스트 분석을 통한 감정 상태 결과를 평균낸 결과를 그래프로 그려준다.

<video width="330" src="https://user-images.githubusercontent.com/54584063/169795303-19a66da5-d53f-4c14-964e-76e8287ce343.MOV" type="video/mp4" controls autoplay></video>

   <br/>

**4. 피드**

피드로 작성한 일기를 다른 사용자와 공유할 수 있다.

<video width="330" src="https://user-images.githubusercontent.com/54584063/169795331-e4793d59-d142-4a89-9efd-0667db18e379.MOV" controls autoplay></video>

<br/>

**5. 지원 사업**

카테고리별 지원사업을 확인할 수 있다. 여러 지원 사업에 대해 한 페이지에서 비교할 수 있고, 관련 링크로 바로 이동할 수 있다.

<video width="330" src="https://user-images.githubusercontent.com/54584063/169797233-50c8f7fd-6690-480b-aaa8-a00d411202ef.mov" controls autoplay></video>

   <br/>

**6. 지원 센터**

미혼모/부를 위한 지원센터 위치를 지도에서 확인할 수 있다. 하단 리스트를 통해 지원 센터 정보를 확인할 수 있고, 홈페이지로 이동도 가능하다

<video width="330" src="https://user-images.githubusercontent.com/54584063/169797098-4f6640c7-4ff3-455d-a80b-7a75c9a9b27f.mov" controls autoplay></video>

   <br/>
