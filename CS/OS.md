**OPERATING SYSTEM(운영체제)**
- 운영 체제 또는 오퍼레이팅 시스템(Operating System, 약칭:OS)은 시스템 하드웨어를 관리할 뿐 아니라
 응용 소프트웨어를 실행하기 위하여 하드웨어 추상화 플랫폼과 공통 시스템 서비스를 제공하는 시스템 소프트웨어
- `자원을 어떻게 효율적으로 관리할 것인가`
- `기능`
  - 프로세서, 기억장치, 입출력장치, 파일 및 정보 등의 자원을 관리
  - 자원을 효율적으로 관리하기 위해 자원의 스케줄링 기능
  - 사용자와 시스템간의 편리한 인터페이스 제공
  - 시스템의 각종 하드웨어와 네트워크를 관리, 제어
  - 데이터를 관리하고, 데이터 및 자원의 공유 기능을 제공
  - 시스템의 오류를 검사하고 복구
  - 자원 보호 기능
  - 입 출력에 대한 보조 기능
---------------------------------------
### `Kernel` ( 좁은 의미의 운영체제 )

 - 운영체제 중 항상 필요한 부분만을 전원이 켜짐과 동시에 메모리에 올려놓고
 그렇지 않은 부분은 필요할 때 메모리에 올려서 사용하게 된다.
 이 때 메모리에 상주하는 운영체제의 부분을 커널이라 한다.

 - `기능`
   - security ( HW, PROCESS )
   - resource management ( cpu, memory etc )
   - system management( in&out, file system etc )

 - `User mode` vs `Kernel mode`
   - `User mode`
     - 사용자의 접근 영역 제한, 프로그램 자원 보호
     - 시스템 데이터에 제한적 접근만 가능, 하드웨어 직접 접근 불가
   - `k

### Process & Thread

 ##### `Process`

 - 실행 중인 프로그램으로 디스크로부터 메모리에 적재되어 CPU 의 할당을 받을 수 있는 것을 말한다.
 운영체제로부터 주소 공간, 파일, 메모리 등을 할당받으며 이것들을 총칭하여 프로세스라고 한다.
 구체적으로 살펴보면 프로세스는 함수의 매개변수, 복귀 주소와 로컬 변수와 같은 임시 자료를 갖는
 프로세스 스택과 전역 변수들을 수록하는 데이터 섹션을 포함한다.
 또한 프로세스는 프로세스 실행 중에 동적으로 할당되는 메모리인 힙을 포함한다.

 - `PCB(PROCESS CONTROL BLOCK)  `
   프로세스에 대한 중요한 정보 및 진행상황을 저장하고있는 자료구조, 프로세스에 고유한 PCB를 형성하며, CONTEXT SWITCHING시,
   진행하던 작업을 저장하고 CPU에 반환할때 진행상황을 PCB에 저장 후, CPU에게 재할당 받을때 PCB에서 불러와 작업 재수행
   - PID, Process state, pc ( next inst ), cpu register, cpu scheduling(priority)
   - memory management ( page & segmentation table ), input&output state, accounting ( time limit, uid )
 - `CONTEXT SWITCHING  `
   - 여러 프로세스를 처리하는 방법
   - Interrupt
   - 동작 중인 프로세스의 상태(CONTEXT) 저장, 다음에 실행할 프로세스 상태(CONTEXT) 복구

 ##### `Thread`

 - 스레드는 프로세스의 실행 단위
 - 한 프로세스 내에서 동작되는 여러 실행 흐름으로 프로세스 내의 주소 공간이나 자원을 공유
 - thread ID, PC, Registers, stack
   - 프로그램 카운터(PC)는 명령어를 어디까지 수행하였는지를 나타냄
     CPU에게 자원을 할당받고 스케줄러에 의해 선점당하는 과정 반복
     **스레드마다 PC를 독립적으로 할당**함
   - stack을 독립적으로 할당한다는 의미는 '독립적인 함수호출'이 가능하단말
     stack에 return주소, local variable, arguments 저장

 같은 프로세스에 속한 다른 스레드와 코드, 데이터 섹션, 그리고 열린 파일이나 신호와 같은 운영체제 자원들을 공유한다.
 하나의 프로세스를 다수의 실행 단위로 구분하여 자원을 공유하고 자원의 생성과 관리의 중복성을 최소화하여
 수행 능력을 향상시키는 것을 멀티스레딩이라고 한다. 이 경우 각각의 스레드는 독립적인 작업을 수행해야 하기 때문에 각자의 스택과 PC 레지스터 값을 갖고 있다.

---------------------------------------


### Multi Process & Multi Thread

 ##### `Multi Process`

 - 하나의 응용프로그램을 여러개의 프로세스로 구성하여 각 프로세스가 한 역할(task) 수행
 - `장점` : 한 프로세스의 ISSUE에 무딤 ( 각 프로세스가 서로에 영향력이 적음 )
 - `단점` : context switching시 오버헤드가 큼 ( cache initialization etc )
          프로세스가 독림된 메모리영역을 갖기 때문 ( IPC, 변수 등 공유 불가 )

 ##### `Multi Thread`

 - 하나의 프로그램 내에서 여러 작업이 필요할 때 활용

 - `장점` : 자원 효율성 ( 자원 할당 system call이 적음 )
          처리 비용 감소( 스레드 간 데이터등의 공유가 간단)
          프로그램 응답시간 단축 ( stack을 제외한 모든 메모리를 공유하기 때문에 응답시간이 짧음 )

 - `단점` : 설계와 디버깅이 어려움
          프로세스 밖에서 스레드 각각을 제어할 수 없음
          멀티 스레드의 경우 자원 공유의 문제가 발생(sync)
          하나의 스레드에 문제가 발생하면 전체 프로세스가 영향

---------------------------------------

### DEADLOCK
 **교착상태, 운영체제 혹은 소프트웨어의 잘못된 자원관리로 둘 이상의 프로세스가 함께 LOCK이 걸리는 상태**

 ##### `CONDITION`
  - `상호 배제` *(Mutual exclusion)*
    - 프로그램이 자원을 점유하는 데 있어서 배타적 ( 자원 동시 사용 불가 )

  - `점유 상태로 대기` *(Hold and wait)*
    - 자원을 붙잡은 상태에서 다른 자원을 기다림

  - `선점 불가` *(No preemption)*
    - 다른 프로세스가 사용중인 걸 뺏어오지 않음

  - `순환성 대기` *(Circular wait)*
    - ??

 ##### `SOLUTION`
  - `Mutex`
    - 접근권한(LOCK)이 있어야 공유 데이터 접근 가능
  - `emaphore`
    - 동시에 자원에 접근가능한 개수 Counter
  - `Monitor`
    -Mutex와 상태변수(queue)를 갖고있는 동기화 과정

---------------------------------------

### Memory Managament
 ##### `MMU(memory management unit)`
  - CPU 코어 안에 탑재되서 virtual address를 실제 메모리 주소로 변환해주는 장치
 ![image](https://user-images.githubusercontent.com/15559593/130338229-4be6e1f9-0e83-45a7-b3d5-af7a86249a8e.png)


 ##### `Fragmentation`

 - 메모리가 공간 조각으로 나누어져 사용 가능한 메모리이지만, 할당이 불가능한 상태

 - `External Fragmentation`
   - 메모리가 할당되고 해제되는 과정에서, 중간중간 작은 메모리 조각이 생기는 상태
   - 총 공간상으로 필요한 만큼 메모리가 존재하지만 연속적이지 않아 사용할 수 없을때
   - Compaction ( copy 과정에서 I/O 문제 -> Paging의 필요성 )

 - `Internal Fragmentation`
   - 프로세스가 필요한 양보다 더 큰 메모리가 할당되는 경우, 내부 메모리 공간이 낭비되는 상태
   - 동일 크기로 메모리를 잘라 할당하였을때, 남는 자투리 ( 15byte -> 4, 4, 4, 3 )

 ##### `Paging & Segmentation`

 - `Paging`
   - virtual memeory를 같은 크기의 블록으로 나누는걸 Paging이라고 함
   - RAM을 페이지와 같은 크기로 나눈 것을 Frame이라고 함
   - 사용하지 않는 frame을 page에 옮기고, 필요한 메모리를 page단위로 frame에 옮기는 기법
   - page <-> frame mapping과정을 위해서 paging table을 만들어 줌
   - 외부 단편화 문제는 해결, 내부 단편화는 여전히 존재
   - 페이지 단위가 작으면 내부 단편화도 해결할 수 있으나 mapping과정에서 로드 발생으로 효율저하
   - ![image](https://user-images.githubusercontent.com/15559593/130338719-ecb2945e-b983-4f71-8b72-fe2c654927fe.png)

 - `Segementation`
   - paging에서 virtual memory를 같은 크기로 분할했다면, segmentation은 크기가 다른
     논리적 단위인 segment로 분할해서 메모리를 할당하여 실제 메모리 주소로 변환
   - 크기가 다르기때문에 미리 분할 할 수 없고, 메모리에 적재시 빈 공간을 찾아 할당하는 기법
   - mapping을 위해 segment table이 존재해야함 (MMU가 갖고있음, CPU가 프로세스가 연속된 메모리에 위치한다 착각)
   - 필요한 만큼 할당해주기 때문에 내부 단편화는 일어나지 않음, 중간에 메모리해제시 외부 단편화 발생
   - 어떻게 자르는가를 제외하면 메모리를 할당하는 기법에 있어서는 paging고 방법이 같음
   -
 ##### `Page Fault`

   - 실행시켜야할 PAGE가 메모리에 올라와있지 않은 상태
   - disk에서 해당부분을 찾아 실제 메모리의 비어있는 frame(ram)에 올리고 page table 갱신
   - 비어있는 frame이 존재하지 않으면? -> page replacement 알고리즘
![image](https://user-images.githubusercontent.com/15559593/130338287-0a00a32b-0b5c-46f3-89a3-c74fbbf63c92.png)

 ##### `Page replacement algorithm`

  - FIFO
    - 실제 메모리에 올라온지 (Frame을 차지한지) 가장 오래된 Frame을 선택하는 알고리즘
    - ![image](https://user-images.githubusercontent.com/15559593/130338326-212b70ad-7da6-48ad-ad51-b3878118905b.png)

  - OPT
    - 가장 오랫동안 사용되지 '않을' frame을 victim으로 선택 ( 예측이기때문에 이론상 존재 )
![image](https://user-images.githubusercontent.com/15559593/130338362-fd147055-4dc6-404d-9001-5da512662e77.png)

  - LRU ( Least Recently Used )
    - 가장 오랫동안 사용되지 않은 Page의 frame을 선택 ( 최근 실행 시 조만간 다시 사용될 것이라 가정 )

    - ![image](https://user-images.githubusercontent.com/15559593/130338381-98e57e1c-c24f-41a0-90c4-8c6fb0757cae.png)
    - 각 page가 실행될때 실행 시간을 page table에 저장 (하드웨어적)
    - 실행 순서를 stack으로 쌓아서 관리(하드웨어적)
    - 'Reference - Bit' 활용 ( page table내에 8 bit 참조 비트를 두어 access되었던 page들의 bit를 shift하여 관리)
    - ![image](https://user-images.githubusercontent.com/15559593/130338458-dcb4031c-4f57-40ed-87a7-c36e3cdfdbef.png)
    - 'second chance' (1 bit짜리 reference bit을 두고, 초기값 0 에서 access시 1로 변경)
      1이면 최근에 접근 되었다는 의미이므로 0으로 변경하고 한번 더 기회를 주고 다른 victim을 찾음
      만약 모든 page의 bit가 1이라면 결국은 fifo와 동일

  - LFU ( Least Frequently Used )
    - 주기억장치에 적재된 page에 대해 참조된 횟수를 기준으로 교체 페이지 선정


  - MFU ( Most Frequently Used
    - 참조 횟수가 가장 많은 page를 교체

 ##### `Logical & Virtual & Physical`

---------------------------------------

### CPU Scheduling

 ##### `Valuation`

 - CPU Utilization
 - Response time
 - Waiting time ( on ready-queue )
 - Turnaround Time ( from start to end )
 - Throughput ( per unit time )

 ##### `Scheduling Algorithm`

 - `Preemptive`

   - 실행중인 프로세스를 중지하고 CPU 강제 점유 가능
   - 모든 프로세스에 cpu 동일하게 부여 가능
   - 빠른 응답시간
   - 종류 :
     - RR
     - SRTF ( Shortest remaining-time first scheduling )
     - Multi-level queue
     - Multi feedback queue
     - RM (rate monotonic)
     - EDF (earlist deadline first)
 - `Non-preemptive`

   -  한 프로세스가 할당 받으면, 종료되거나 자발적 중지까지 실행 보장
   -  처리율이 떨어질 수 있음 ( 소모가 큰 한 프로세스가 나머지 프로세스 대기시킴 )
   -  순서대로 처리되는 공정성
   -  응답시간 예상가능
   -  종류 :
     - FCFS
     - SJF
     - HRRN (Highest Response Ratio Next Scheduling)


---------------------------------------

### Sync & Async
 ##### dd
 - dd

---------------------------------------

### kernel lv thread & user lv thread
 ##### dd
 - dd

