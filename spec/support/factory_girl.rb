RSpec.configure do |config|
  
  # config.before(:all) do
  #   FactoryGirl.find_definitions if FactoryGirl.factories.count == 0 # I also tried FactoryGirl.reload here
  # end

  config.include FactoryGirl::Syntax::Methods


end