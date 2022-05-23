# 2022-SolutionChallenge-Dasoni

2022 Google Solution Challenge를 위한 프로젝트입니다.

## Summary

미혼모/부를 위한 감정 기록 다이어리 서비스

- 다이어리 기록을 통해 감정 관리를 할 수 있고, 텍스트 감정 분석을 통해 감정 상태를 진단할 수 있습니다.

- 또한 사용자 설정에 따라 원하는 감정 일기를 피드에 공유함으로서 공감과 위로를 위한 커뮤니티를 형성할 수 있습니다.

- 카테고리별로 관련 지원 사업 링크 연계 서비스를 제공하고 지도를 통해 미혼모 센터 찾기 기능을 지원

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

**execute**

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

1. 구글 소셜 로그인

   Google Social Login을 통해서 사용자 계정 생성

   <img width="330" alt="다소니-로그인" src="https://user-images.githubusercontent.com/54584063/169696768-4b842c4a-6794-47f9-9fbb-1f9f560d7c22.gif"/>

   <br/>

2. 감정 일기

- 날짜에 따른 감정 위로 문구

  감정적 위로를 위한 명언을 보여준다.

- Weekly 감정 일기

  주 단위로 사용자가 작성한 일기의 텍스트 감정을 분석한다. 이때 나온 결과를 직관적으로 보여준다. 상세페이지를 통해 그 주에 작성한 일기를 확인할 수 있다.

  <img width="330" alt="다소니-weeklymood" src="https://user-images.githubusercontent.com/54584063/169696855-7f48701d-a46b-428d-9a88-8456c5489622.gif"/>

- 내 감정 일기 확인

  색상과 경고아이콘으로 감정적 위험 상황을 직관적으로 인지시킬 수 있다. 알림을 원하지 않는 유저를 위해 notification 토글 버튼을 통해 알림 표시를 on/off 할 수 있다.

  <img width="330" alt="다소니-notification-toggle" src="https://user-images.githubusercontent.com/54584063/169696866-3c421534-f1c1-41ba-90e0-45c503e9206f.gif"/>

- 다이어리 작성

  사용자는 날짜와 함께 감정을 선택할 수 있다. 아래 체크박스를 통해 피드에 업로드 할 수 있다.

  <img width="330" alt="다소니-글쓰기" src="https://user-images.githubusercontent.com/54584063/169789054-83d409df-6577-4e7b-89ca-fb55d87c24ea.gif"/>

   <br/>

3. 감정 통계

   사용자가 입력한 감정 상태와 텍스트 분석을 통한 감정 상태 결과를 평균낸 결과를 그래프로 그려준다.

   <img width="330" alt="다소니-statistics" src="https://user-images.githubusercontent.com/54584063/169734281-232214ad-5aec-4502-9754-67ab27371514.gif"/>

   <br/>

4. 피드

   피드로 작성한 일기를 다른 사용자와 공유할 수 있다.

    <img width="330" alt="다소니-feed" src="https://user-images.githubusercontent.com/54584063/169697065-bba92d2d-881d-4a83-9740-eb1c73f1278d.gif"/>

   <br/>

5. 지원 사업

   카테고리별 지원사업을 확인할 수 있다. 여러 지원 사업에 대해 한 페이지에서 비교할 수 있고, 관련 링크로 바로 이동할 수 있다.

    <img width="330" alt="다소니-지원사업" src="https://user-images.githubusercontent.com/54584063/169697074-413fd8fa-1154-43a0-905d-ec740d516571.gif"/>

   <br/>

6. 지원 센터

   미혼모/부를 위한 지원센터 위치를 지도에서 확인할 수 있다. 하단 리스트를 통해 지원 센터 정보를 확인할 수 있고, 홈페이지로 이동도 가능하다

    <img width="330" alt="다소니-지원센터지도" src="https://user-images.githubusercontent.com/54584063/169697071-745d7b5c-154b-4881-b50e-841a18af55c5.gif"/>

   <br/>
