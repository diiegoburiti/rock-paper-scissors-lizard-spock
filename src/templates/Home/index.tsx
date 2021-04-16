import { useState } from 'react'
import Button from 'components/Button'
import Container from 'components/Container'
import {
  FaHandLizard,
  FaHandPaper,
  FaHandRock,
  FaHandScissors,
  FaHandSpock
} from 'react-icons/fa'

import * as S from './style'

export default function Home() {
  const [userPick, setUserPick] = useState<string>()
  const [result, setResult] = useState('')
  const [playing, setPlaying] = useState<boolean>(false)

  function randomComputerPick() {
    const computerChoice = Math.floor(Math.random() * 5)
    switch (computerChoice) {
      case 0:
        return 'rock'
      case 1:
        return 'lizard'
      case 2:
        return 'spock'
      case 3:
        return 'scissors'
      case 4:
        return 'paper'
    }
  }

  function calcResult(computerChoice: string, userChoice: string) {
    if (userChoice === computerChoice) {
      return `the computer also chose ${computerChoice} the result is a tie!`
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'paper covers rock You Lose'
      } else if (computerChoice === 'scissors') {
        return 'rock crushes scissors You Win!'
      } else if (computerChoice === 'lizard') {
        return 'rock crushes lizard You Win!'
      } else {
        return 'spock vaporizes rock You Lose'
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'paper covers rock You Win!'
      } else if (computerChoice === 'scissors') {
        return 'scissors cut paper You Lose'
      } else if (computerChoice === 'lizard') {
        return 'lizard eats paper You Lose'
      } else {
        return 'paper disproves spock You Win!'
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'rock crushes scissors You Lose'
      } else if (computerChoice === 'paper') {
        return 'scissors cut paper You Win!'
      } else if (computerChoice === 'lizard') {
        return 'scissors decapitate lizard You Win!'
      } else {
        return 'spock smashes scissors You Lose'
      }
    } else if (userChoice === 'lizard') {
      if (computerChoice === 'rock') {
        return 'rock crushes lizard You Lose'
      } else if (computerChoice === 'paper') {
        return 'lizard eats paper You Win!'
      } else if (computerChoice === 'scissors') {
        return 'scissors decapitate lizard You Lose'
      } else {
        return 'lizard poisons spock You Win!'
      }
    } else if (userChoice === 'spock') {
      if (computerChoice === 'rock') {
        return 'spock vaporizes rock You Win!'
      } else if (computerChoice === 'paper') {
        return 'paper disproves spock You Lose'
      } else if (computerChoice === 'scissors') {
        return 'spock smashes scissors You Win!'
      } else {
        return 'lizard poisons spock You Lose'
      }
    }
  }

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setPlaying(true)
    const pick = event.currentTarget.textContent?.toLocaleLowerCase()
    const computer = randomComputerPick()
    const finalResult = calcResult(computer, pick)
    setUserPick(pick)
    setResult(finalResult)

    setTimeout(() => {
      setPlaying(false)
    }, 300)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <h1>Do you chose Rock, Lizard, Spock, Scissors or Paper ?</h1>
        </S.Header>

        <S.Image
          loading="lazy"
          src="/img/rock_paper_scissors_lizard_spock.svg"
          alt="game instructions image"
        />

        <S.Result>
          {result && (
            <h2>
              You chose {userPick}, {result}
            </h2>
          )}
        </S.Result>

        <div>
          <Button
            disabled={playing}
            onClick={handleClick}
            icon={<FaHandRock />}
          >
            Rock
          </Button>
          <Button
            disabled={playing}
            onClick={handleClick}
            icon={<FaHandLizard />}
          >
            Lizard
          </Button>
          <Button
            disabled={playing}
            onClick={handleClick}
            icon={<FaHandSpock />}
          >
            Spock
          </Button>
          <Button
            disabled={playing}
            onClick={handleClick}
            icon={<FaHandScissors />}
          >
            Scissors
          </Button>
          <Button
            disabled={playing}
            onClick={handleClick}
            icon={<FaHandPaper />}
          >
            Paper
          </Button>
        </div>
      </Container>
    </S.Wrapper>
  )
}
