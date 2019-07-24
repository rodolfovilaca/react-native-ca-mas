
Pod::Spec.new do |s|
  s.name         = "RNCaMas"
  s.version      = "1.0.0"
  s.summary      = "RNCaMas"
  s.description  = "RNCaMas podspec"
  s.homepage     = "none"
  s.license      = "MIT"
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNCaMas.git", :tag => "master" }
  s.source_files  = "**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  s.dependency 'MASFoundation', '~> 1.9.0'

end
