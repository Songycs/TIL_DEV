package com.huni.todolist.config

import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {
    //cors policy setting
    override fun addCorsMappings(registry : CorsRegistry) {
        registry
            .addMapping("/**")
            .allowedOrigins("http://localhost:3000") //이에 대해 다른 도메인이라도 허락하겠다
            .allowedMethods(
                HttpMethod.GET.name,
                HttpMethod.POST.name,
                HttpMethod.PUT.name,
                HttpMethod.DELETE.name,
            )
    }
}