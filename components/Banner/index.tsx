/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Slider from 'react-slick'

const useStyles = makeStyles(() => ({
	overlay: {
		width: '100%',
		height: 40,
		background: 'rgba(203,211,32,1)',
		position: 'absolute',
		bottom: 0,
		boxShadow: '0px -10px 40px 40px #CBD320',
	},
	imgStyle: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
}))

export default function index() {
	const classes = useStyles()
	const matches = useMediaQuery('(max-width:960px)')

	const settings = {
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		swipeToSlide: true,
		centerMode: !matches,
	}

	return (
		<div style={{ marginBottom: 50, position: 'relative', overflow: 'hidden' }}>
			{!matches ? (
				<Slider {...settings}>
					<div>
						<img
							src="/images/banner-moving.jpg"
							alt=""
							className={classes.imgStyle}
						/>
					</div>
					<div>
						<img
							src="/images/banner-moving.jpg"
							alt=""
							className={classes.imgStyle}
						/>
					</div>
					<div>
						<img
							src="/images/banner-moving.jpg"
							alt=""
							className={classes.imgStyle}
						/>
					</div>
				</Slider>
			) : (
				<Slider {...settings}>
					<div>
						<img src="/images/banner-mob-1.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-2.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-3.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-4.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-1.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-2.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-3.jpg" alt="" className={classes.imgStyle} />
					</div>
					<div>
						<img src="/images/banner-mob-4.jpg" alt="" className={classes.imgStyle} />
					</div>
				</Slider>
			)}
			<div className={classes.overlay} />
		</div>
	)
}
