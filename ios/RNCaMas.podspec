
Pod::Spec.new do |s|
  s.name         = "RNCaMas"
  s.version      = "1.0.0"
  s.summary      = "RNCaMas"
  s.description  = <<-DESC
                  RNCaMas
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "git@github.com:rodolfovilaca/react-native-ca-mas.git", :branch => "logout-mas" }
  s.source_files  = "RNCaMas/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end
