# ZIGBANG ZED TA Assignment

## 과제 설명

- 과제는 유니티 2019.4.21f1 으로 작성합니다.
- 프로젝트내부에 2개의 Scene이 존재합니다

### Danji.unity
![image](https://user-images.githubusercontent.com/52955606/122860977-a5137d00-d359-11eb-87b8-5cc82b3ff6f4.png)
- 직방에서 사용하고 있는 단지를 obj 파일로 익스포트하고 이를 프리팹으로 임포트한 Scene입니다.
- 오브젝트의 구조는 다음과 같습니다
 
![image](https://user-images.githubusercontent.com/52955606/122861078-cf653a80-d359-11eb-9fef-9e59731129a7.png)
  - Danji: 아파트 단지 건물
  - Items: 아파트 단지 내에 매물에 해당하는 세대
  - BuildingFloors: 건물과 지면 사이에 존재하는 바닥면 폴리곤
  - AroundBuildings: 아파트 단지를 제외한 주변 지역 건물 
  - AroundDanjis: 주변에 존재하는 다른 아파트 단지
  - Ground: 지형 폴리곤
### Room.unity
![image](https://user-images.githubusercontent.com/52955606/122860915-83b29100-d359-11eb-9f92-8e96eabb4adf.png)
- 직방에서 사용하고 있는 실내 평면도 모델링입니다. 해당 모델링은 자동생성으로 만들어지며, 자동 생성시에 주어진 material만 사용할 수 있습니다.

- 주어진 2개의 Scene에서 오브젝트들의 용도 및 가시성을 고려하여 머테리얼 및 쉐이더을 제작하고, 적절한 라이팅을 배치하여 완성된 Scene을 만들어 제출하세요.

## 제약조건
- URP를 사용할것 
- 라이트맵을 사용하지 말것
- 애셋의 추가적인 용량은 50MB 이하로 사용할것
