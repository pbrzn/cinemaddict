FactoryBot.define do
  starring_array = []
  3.times do
    starring_array << Faker::FunnyName.two_word_name
  end
  year_array = (1920..2022).to_a
  letter = ["a", "b", "c", "d"]
  factory :movie, class: Movie do
    title { Faker::Movie.title }
    year { year_array.sample }
    director { Faker::FunnyName.two_word_name }
    starring { starring_array }
    cinemaddict_rating { Faker::Float.between(0.0, 10.0) }
  end

  factory :user, class: User do
    username { Faker::Twitter.screen_name }
    password { "password" }
    bio { Faker::Lorem.paragraph(sentence_count: 4) }
    avatar { Faker::Fillmurray.image(grayscale: true, width: 500, height: 700) }
  end

  factory :review, class: Review do
    title { Faker::Lorem.sentence(word_count: 4).split(" ").map {|word| word.capitalize}.join(" ").delete(".") }
    body { Faker::Lorem.paragraphs(number: 3, supplemental: true).join("\n") }
    user_id { rand(1..20) }
    movie_id { rand(1..250) }
    rating { rand(1..10) }


end
