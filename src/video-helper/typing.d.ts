export interface IVideoHelperConfig {
  autoPlay: boolean
  autoFullScreen: boolean
  skip: {
    enable: boolean
    beforeSkipTs: number
    afterSkipTs: number
  }
}
