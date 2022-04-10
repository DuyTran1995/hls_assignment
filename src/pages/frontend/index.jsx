import Container from "../../component/container";
import USER_AVATAR from '../../assets/images/user-avatar.png'
import Logo from "../../assets/images/logo.png";
import styled from "styled-components";
import Button from "../../component/button";
import {jokes} from '../../mock/index'
import {useLayoutEffect, useState} from "react";

const Page = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
  height: 100%;
`

const FrontendPageHeaderStyled = styled(Container)`
  margin-bottom: 12px;
	
	header {
    display: flex;
		justify-content: space-between;
		align-items: center;
		
		img {
      display: inline-block;
    }
		
		.logo {
			width: 55px;
		}
		
		.avatar {
			width: 55px;
		}
		
		.user {
      display: flex;
			align-items: center;
			
			.user-info {
				text-align: right;
				margin-right: 15px;
			}
		}
	}
`

const FrontendPageBannerStyled = styled.div`
	background-color: rgb(41, 179, 99);
  padding: 45px 0;
	color: #FFFFFF;
	text-align: center;
	width: 100%;
	
	h3 {
    font-size: 40px;
    white-space: nowrap;
    margin-bottom: 0;
	}
	
	p {
		margin: 30px 0;
	}
`

const FrontendPageMainStyled = styled.div`
	text-align: center;
	margin-top: 25px;
	margin-bottom: 25px;
	flex: 1;
  display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	
	.end_joke {
    color: rgb(41, 179, 99);
    font-weight: 900;
    font-size: 30px;
    line-height: 1.7rem;
    margin-bottom: 45px;
    text-align: center;
	}
	
	.joke-action {
    border-top: 1px solid #DDDDDD;
		margin-top: 20px;
		padding-bottom: 20px;
    margin-left: 200px;
    margin-right: 200px;

  }
	
	button {
		margin-top: 50px;
		font-weight: 900;
		text-transform: capitalize;
		
		&:first-child {
			margin-right: 10px;
		}
		
		&:last-child {
			margin-left: 10px;
		}
	}
	
	@media only screen and (max-width: 767px) {
		.joke-action {
			button {
				width: 100%;
        margin: 0 0 10px 0;
			}
		}
	}
`

const FrontendPageFooterStyled = styled.footer`
	margin-bottom: 50px;
	border-top: 1px solid #333333;
	color: #333333;
	text-align: center;
	
	p {
		margin: 20px 0;
	}
`

export default function Frontend() {
	const [joke, setJoke] = useState(jokes[0])
	const [id, setId] = useState(1)
	
	function handleChangeJoke() {
		setId(id => id+1)
	}
	
	useLayoutEffect(() => {
		const filterJoke = jokes.find((joke) => joke.id === id)
		setJoke(filterJoke)
		if (id > 5) {
			setId(1)
		}
	}, [id]);
	
	
	return (
		<Page>
			<FrontendPageHeaderStyled>
				<header>
					<img className="logo" src={Logo} alt="logo"/>
					<div className="user">
						<div className="user-info">
							<div className="user-label">
								Handicrafted by
							</div>
							<div className="user-name">
								Jim HLS
							</div>
						</div>
						<div className="user-avatar">
							<img className="avatar" src={USER_AVATAR} alt=""/>
						</div>
					</div>
				</header>
			</FrontendPageHeaderStyled>
			
			<FrontendPageMainStyled>
				<FrontendPageBannerStyled>
					<Container>
						<h3>A joke a day keeps the doctor away</h3>
						<p>If you joke wrong way, your teeth have to pay. (Serious)</p>
					</Container>
					
				</FrontendPageBannerStyled>
					<Container>
						<div className="joke-content">
							<p className={id === 5 && 'end_joke'}>{joke?.value}</p>
						</div>
						
						<div className="joke-action">
							<Button className="primary" onClick={() => handleChangeJoke()}>this is Funny!</Button>
							<Button className="secondary" onClick={() => handleChangeJoke()}>this is not Funny!</Button>
						</div>
					</Container>
				
			</FrontendPageMainStyled>
			
			<FrontendPageFooterStyled>
				<Container>
					<p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general
						information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and
						accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
					<div className="copyright">
						Copyright 2021 HLS
					</div>
				</Container>
			</FrontendPageFooterStyled>
		</Page>
		
	)
}
