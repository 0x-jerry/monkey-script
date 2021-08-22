export interface IVideoHelperConfig {
  autoPlay: boolean
  skip: {
    enable: boolean
    beforeSkipTs: number
    afterSkipTs: number
  }
}
